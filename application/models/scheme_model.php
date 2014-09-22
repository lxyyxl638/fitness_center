<?php defined('BASEPATH') OR exit('No direct script access allowed');
define('PERIOD',2);

class Scheme_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('public_model');
    }
    
    function init($table,$time)
    {
        $this->public_model->get($year,$season,$week);
        for ($i = 1;$i <= 7;$i++)
          for ($j = 1;$j <= 2;$j++)
            for ($k = 1;$k <= $time;$k++)
             {
                    $data = array(
                       'year' => $year,
                       'season' => $season,
                       'week' => $week,
                       'day' => $i,
                       'period' => $j,
                       'time' => 100,
                       'uid' => 0,
                       'date' => date('Y-m-d H:i:s',time())
                       );
                $this->db->insert($table,$data);
             }
    }

    function arrange($table,&$message,$flag = 0)
    {
        if ($flag == 0)
        {
            $this->public_model->get($year,$season,$week);
        }
        else
        {
            $year = $this->input->post('year');
            $season = $this->input->post('season');
            $week = $this->input->post('week');
        }
        /*插入选择*/
        $id = $this->input->post('id');
        if (isset($id) && (!empty($id)))
        {
            /*看是否能插入*/
            $this->db->where('id',$id);
            $query = $this->db->get($table);
            $row = $query->row_array();
            $validable = $this->validable($row,$table);

            $uid = $this->session->userdata('uid');
            
            if ($table == "boy")
                {
                    $data = array(
                                    'year' => $row['year'],
                                    'season' => $row['season'],
                                    'week' => $row['week'],
                                    'day' => $row['day'],
                                    'period' => $row['period'],
                                    'uid' => $uid
                                 );
                    $this->db->where($data);
                    $this->db->from($table);
                    if ($this->db->count_all_results() > 0)
                    {
                        $validable = 2;
                    }
                }

            if ($validable == 1)
            {          
                $this->db->where('uid',$uid);
                $this->db->from($table);
                $time = $this->db->count_all_results() + 1;
                $data = array(
                        'time' => $time,
                        'uid' => $uid,
                        'date' => date('Y-m-d H:i:s',time())
                    );
                $this->db->where('id',$id);
                $this->db->update($table,$data);         
            }

            if ($validable == 2)
            {
                $where = array(
                        'year' => $row['year'],
                        'season' => $row['season'],
                        'week' => $row['week'],
                        'day' => $row['day'],
                        'period' => $row['period'],
                        'uid' => $uid
                    );
                /*查看这是他第几次排班*/
                $this->db->select('time');
                $this->db->where($where);
                $query = $this->db->get($table);
                $tmp = $query->row_array();
                $time = $tmp['time'];
                /*更新此人的排班次数*/
                $this->db->set('time','time-1',FALSE);
                $this->db->where('uid',$uid);
                $this->db->where('year',$row['year']);
                $this->db->where('season',$row['season']);
                $this->db->where('week',$row['week']);
                $this->db->where('time >',$time);
                $this->db->update($table);
                /*删除此班*/
                 $data = array(
                        'uid' => 0,
                        'time' => 100,
                        'date' => date('Y-m-d H:i:s',time())
                    );
                $this->db->where($where);
                $this->db->update($table,$data);
            }
        }

        /*判断是否有这张表*/
        $this->db->where('year',$year);
        $this->db->where('season',$season);
        $this->db->where('week',$week);
        $this->db->from($table);
        if ($this->db->count_all_results() == 0)
        {
            $message['state'] = "empty";
            return;
        }
        else
        {
            $message['state'] = "success";
        }
        /*返回排班表*/
        for ($i = 1; $i <= 7; $i++)
        { 
            for ($j = 1; $j <= 2; $j++) 
            { 
                $data = array(
                            'year' => $year,
                            'season' => $season,
                            'week' => $week,
                            'day' => $i,
                            'period' => $j
                            );
                $this->db->order_by('time','desc');//按排班次数
                $this->db->order_by('date','desc');//按排班时间先后
                $query = $this->db->get_where($table,$data);

                if ($table == "boy")
                {
                    $row = $query->row_array();
                    $message[$i][$j]['0']['id'] = $row['id'];
                    $message[$i][$j]['0']['uid'] = $row['uid'];
                    $message[$i][$j]['0']['realname'] = $this->public_model->get_realname($row['uid']);
                    $message[$i][$j]['0']['validable'] = $this->validable($row,$table);
                    $message[$i][$j]['0']['time'] = $row['time'];
                    if ($query->num_rows() > 1)
                    {
                        $row = $query->row_array(1);
                        $message[$i][$j]['1']['id'] = $row['id'];
                        $message[$i][$j]['1']['uid'] = $row['uid'];
                        $message[$i][$j]['1']['realname'] = $this->public_model->get_realname($row['uid']);
                        $message[$i][$j]['1']['validable'] = $this->validable($row,$table);
                        $message[$i][$j]['1']['time'] = $row['time'];
                        if ($row['uid'] == $this->session->userdata('uid'))
                        {
                            $message[$i][$j]['0']['validable'] = 2;
                        }
                    }
                }
                else
                {
                    $row = $query->row_array();
                    $message[$i][$j]['0']['id'] = $row['id'];
                    $message[$i][$j]['0']['uid'] = $row['uid'];
                    $message[$i][$j]['0']['realname'] = $this->public_model->get_realname($row['uid']);
                    $message[$i][$j]['0']['validable'] = $this->validable($row,$table);
                }
            }
        }
    }

    function validable($row,$table)
    {
        /*判断此班是否为空*/
        if ($row['uid'] == 0) return 1;
       
        $uid = $this->session->userdata('uid');
        /*判断此班是否是自己的班*/
        if ($uid == $row['uid']) return 2;

        /*判断是否可以替换掉此人的班*/
        /*排班次数比较*/
        $mytime = $this->get_time($uid,$table);
        $time = $row['time'];
        if ($mytime + 1 >= $time) 
            {
                return 3;
            }
            else 
            {
                return 1;
            }
    }

    function get_time($uid,$table)
    {
        $this->public_model->get($year,$season,$week);
        $this->db->where('uid',$uid);
        $this->db->where('year',$year);
        $this->db->where('season',$season);
        $this->db->where('week',$week);
        $this->db->from($table);
        return $this->db->count_all_results();
    }
}