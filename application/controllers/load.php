<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Load extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->library('encrypt');
        $this->load->library('session');
        $this->load->library('form_validation');
        $this->form_validation->set_error_delimiters('','');
    }
    

    function nav_scheme()
    {
    	$this->load->view('scheme');
    }
    

    function nav_view()
    {
    	$this->load->view('view');
    }

    function nav_directory()
    {
    	$this->load->view('directory');
    }

    function profile()
    {
        $this->load->view('profile');
    }

    function logout()
    {
       $this->session->sess_destroy();
       $this->load->view('login');
    }
}