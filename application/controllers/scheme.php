<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Scheme extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->library('encrypt');
        $this->load->library('session');
        $this->load->library('form_validation');
        $this->form_validation->set_error_delimiters('','');
        $this->load->model('scheme_model');
    }
    

    function init()
    {
      if ($this->session->userdata('username') == "5120309438")
       {
          $table = 'boy';
          $this->scheme_model->init($table,2);
          $table = 'girl';
          $this->scheme_model->init($table,1);
          $table = 'manager';
          $this->scheme_model->init($table,1);
          $table = 'coach';
          $this->scheme_model->init($table,1);
       }
    }

    function arrange()
    {
        $level=$this->session->userdata('level');
        $status = $this->session->userdata('status');
        if (isset($status) && $status === "OK")
        {
              switch ($level) 
              {
                 case '1':
                   $table = 'girl';
                   $message['table'] = "女员工";
                   break;
                 case '2':
                   $table = 'boy';
                   $message['table'] = "男员工";
                   break;
                 case '3':
                   $table = 'manager';
                   $message['table'] = "经理";
                   break;
                 case '4':
                   $table = 'coach';
                   $message['table'] = "教练";
                   break;
                 
              } 
      
              $this->scheme_model->arrange($table,$message);

              $this->output->set_content_type('application/json')->set_output(json_encode($message));
        }
        else
        {
            $message['state'] = "Unlogin";
            $this->output->set_content_type('application/json')->set_output(json_encode($message));
        }
        // if ($table='boy')
        // {
        //   $this->scheme_model->arrange_boy($table,$message);
        //   $this->output->set_content_type('application/json')->set_output($message);
        // }
        // else
        // {
        //   $this->scheme_model->arrange_other($table,$message);
        //   $this->output->set_content_type('application/json')->set_output($message);
        // }
    }

    function view()
    {
      $status = $this->session->userdata('status');
      if (isset($status) && $status === "OK")
        {
            $this->scheme_model->arrange("manager",$message['1'],1);
            $this->scheme_model->arrange("boy",$message['2'],1);
            $this->scheme_model->arrange("girl",$message['3'],1);
            $this->scheme_model->arrange("coach",$message['4'],1);
            $this->output->set_content_type('application/json')->set_output(json_encode($message));
        }   
    }

    function directory()
    {
      $status = $this->session->userdata('status');
      if (isset($status) && $status === "OK")
        {
            $this->db->select('name,phone');
            $this->db->where('level',1);
            $query = $this->db->get('worker_list');
            $message['1'] = $query->result_array();
            $message['1']['sum'] = $query->num_rows();
    
            $this->db->select('name,phone');
            $this->db->where('level',2);
            $query = $this->db->get('worker_list');
            $message['2'] = $query->result_array();
            $message['2']['sum'] = $query->num_rows();
    
            $this->db->select('name,phone');
            $this->db->where('level',3);
            $query = $this->db->get('worker_list');
            $message['3'] = $query->result_array();
            $message['3']['sum'] = $query->num_rows();
    
            $this->db->select('name,phone');
            $this->db->where('level',4);
            $query = $this->db->get('worker_list');
            $message['4'] = $query->result_array();
            $message['4']['sum'] = $query->num_rows();
    
            $this->db->select('name,phone');
            $this->db->where('level',5);
            $query = $this->db->get('worker_list');
            $message['5'] = $query->result_array();
            $message['5']['sum'] = $query->num_rows();
            $this->output->set_content_type('application/json')->set_output(json_encode($message));   
        }
    }
}