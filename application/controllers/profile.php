<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Profile extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->library('encrypt');
        $this->load->library('session');
        $this->load->library('form_validation');
        $this->form_validation->set_error_delimiters('','');
        $this->load->model('profile_model');
    }
    
    function change_password()
    {
        $status = $this->session->userdata('status');
        if (isset($status) && $status === 'OK')
        {
            $message = '';
            if (!$this->profile_model->change_password($message))
            {
               $message['state'] = "fail";
               $this->output->set_content_type('application/json')->set_output(json_encode($message));
            }
            else
            {
               $message['state'] = "success";
               $this->output->set_content_type('application/json')->set_output(json_encode($message));
            }
        }
        else
        {
            $message['state'] = "fail";
            $message['detail'] = "Unlogin";
            $this->output->set_content_type('application/json')->set_output(json_encode($message));
        }
    }
}