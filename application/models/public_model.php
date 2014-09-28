<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Public_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    
    

    function get(&$year,&$season,&$week)
    {
        $query = $this->db->get('current_info');
        $row = $query->row_array();
        $date = date('Y-m-d H:i:s');
        if ( strtotime($date) - strtotime($row['date']) > 604800)
        {
            $year = $row['year'];
            $season = $row['season'];
            $week = $row['week'] + 1;
            $this->db->set('week','week + 1',FALSE);
            $this->db->set('date',$date);
            $this->db->where('id',$row['id']);
            $this->db->update('current_info');
            $table = 'boy';
            $this->scheme_model->init($table,2);
            $table = 'girl';
            $this->scheme_model->init($table,1);
            $table = 'manager';
            $this->scheme_model->init($table,1);
            $table = 'coach';
            $this->scheme_model->init($table,1);
        }
        else
        {
            $year = $row['year'];
            $season = $row['season'];
            $week = $row['week'];
        }
        return TRUE;
    }

    function get_realname($uid)
    {
        $this->db->select('realname');
        $this->db->where('id',$uid);
        $query = $this->db->get('user');
        $row = $query->row_array();
        if (!empty($row))
        {
             return $row['realname'];
        }
        else
        {
            return "";
        }
    }
}