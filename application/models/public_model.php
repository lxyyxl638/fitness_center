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
        $year = $row['year'];
        $season = $row['season'];
        $week = $row['week'];
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