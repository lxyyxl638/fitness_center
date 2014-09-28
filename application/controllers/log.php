<?php defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH.'/libraries/vendor/autoload.php';
use Mailgun\Mailgun;
 
class Log extends CI_Controller
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
    

    function index()
    {
        $this->load->view('login');
    }

    function check_session()
    {
        if ($this->session->userdata('status') == "OK")
        {
          $message['state'] = "success";
          $this->output->set_content_type('application/json')->set_output(json_encode($message));
        }
        else
        {
          $message['status'] = "fail";
          $this->output->set_content_type('application/json')->set_output(json_encode($message));
        }
    }

    function login()
    {
         $username = $this->input->post('username',TRUE);
         $password = $this->input->post('password',TRUE);

         if (!empty($username) && !empty($password))
          {
             $query = $this->db->get_where('user',array('username' => $username));
             if ($query->num_rows() > 0)
             {
                 $row = $query->row_array();
                 $checkpassword = $this->encrypt->decode($row['password']);
                if ($checkpassword === $password)
                {
                    $id = $row['id'];
                    $level = $row['level'];
                    $realname = $row['realname'];
                    $data = array( 
                                   'lastlogin' => date('Y-m-d H:i:s',time()),
                                   'numloginfail' => 0
                                   //'lastloginfail' => 
                                 );
                    $this->db->where('id',$id);
                    $this->db->update('user',$data);
                    
                    $newdata = array(
                                  'username' => $username,
                                  'password' => $password,
                                  'realname' => $realname,
                                  'level' => $level,
                                  'uid' => $id,
                                  'status' => 'OK'
                                 );                      
                    $this->session->set_userdata($newdata);                
                    $message['state'] = 'success';
                    if ($username === "root@zenyang.com")
                     {
                       $message['state'] = 'root';
                     }

                    $message['state']="success";
                    $this->output->set_content_type('application/json')->set_output(json_encode($message));             
                }
                else  
                { 
                     // $lastloginfail = strtotime($row['lastloginfail']);
                     // $now = date('Y-m-d H:i:s',time());
                     // if ($now - $lastloginfail >= 60 * 15)
                     // {
                     //    $this->db->set('numloginfail',0);
                     //    $this->db->where('email',$email);
                     //    $this->db->update('user');
                     // }
                     // $data = array(
                     //              'lastloginfail' => date('Y-m-d H:i:s',time());
                     //              'numloginfail' => 'numloginfail + 1';
                     //              );
                     // $this->db->where('email',$email);
                     // $this->db->update('user',$data);
                     $message['state'] = 'fail';
                     $message['detail'] = 'passwordWrong';
                     $this->output->set_content_type('application/json')->set_output(json_encode($message));
                }
             }
             else
             {
                 $message['state'] = 'fail';
                 $message['detail'] = "usernameNotExist";
                 $this->output->set_content_type('application/json')->set_output(json_encode($message));
             }
          }
          else
          {
             $message['state'] = 'fail';
             if (empty($username)) 
                {
                   $message['detail'] = "usernameNotExist";
                }
              else
               {
                   $message['detail'] = "passwordWrong";
               } 
             $this->output->set_content_type('application/json')->set_output(json_encode($message));
          }         
    }

    function logout()
    {
       $this->session->sess_destroy();
       $message['state'] = "success";
       $this->response($message,200);
    }

    function signup()
    {
                 
         if ($this->form_validation->run('signup') === FALSE)
          {
             $message['state'] = "fail";
             $message['detail'] = form_error('username');
             if (empty($message['detail'])) 
              { 
                $message['detail'] = form_error('password');
              }
             if (empty($message['detail'])) 
              { 
                $message['detail'] = form_error('realname');
              }
             if (empty($message['detail'])) 
              { 
                $message['detail'] = form_error('level');
              }
            if (empty($message['detail'])) 
              { 
                $message['detail'] = form_error('email');
              }
              $this->output->set_content_type('application/json')->set_output(json_encode($message));
          }
         else 
          { 
             /*读入数据*/
             $email = $this->input->post('email');
             $username = $this->input->post('username');
             $password = $this->input->post('password');
             $realname = $this->input->post('realname');
             $level = $this->input->post('level');

             if (!$this->check($username))
             {
                $message['state'] = "fail";
                $message['detail'] = "usernameNotExist";
                $this->output->set_content_type('application/json')->set_output(json_encode($message));
                return;
             }
             /*若没选择职位*/
             if ($level==0)
             {
                $message['state']="fail";
                $message['detail']="levelInvalid";
                $this->output->set_content_type('application/json')->set_output(json_encode($message));
                return;
             }
             $password = $this->encrypt->encode($password);
             $signupdate = date('Y-m-d H:i:s',time());
             $data = array( 
                            'email' => $email,
                            'username' => $username,
                            'password'=> $password,
                            'realname' => $realname,
                            'signupdate' => $signupdate,
                            'lastlogin'=> $signupdate,
                            'level' => $level,
                            //'lastloginfail'=> date("Y-m-d H:i:s",0),
                            'numloginfail' => 0
                           );
             $this->db->insert('user',$data);
                          
             $query = $this->db->get_where('user',array('username'=>$username));
             $row = $query->row_array();
             $id = $row['id'];
             $newdata = array(
               'email' => $email,
               'username' => $username,
               'password' => $password,
               'uid' => $id,
               'realname' => $realname,
               'level' => $level,
               'status' => 'OK'
               );             
             $this->session->set_userdata($newdata);            
             $message['state'] = 'success';
             $this->output->set_content_type('application/json')->set_output(json_encode($message));
         }
    }

    function check($username)
    {
      $this->db->where('number',$username);
      $this->db->from('worker_list');
      if ($this->db->count_all_results() > 0)
      {
        return TRUE;
      }
      else
      {
        return FALSE;
      }
    }

    function password_reset()
    {
        $username = $this->input->post('username');
        $email = $this->input->post('email');
        $randpwd = '';
        for ($i = 0; $i < 8; $i++) 
        {
            $randpwd .= chr(mt_rand(97, 122));
        }    
        
        $this->db->where('email',$email);
        $this->db->where('username',$username);
        $this->db->from('user');
        if ($this->db->count_all_results() > 0)
        { 
            $data = array(
                          'password' => $this->encrypt->encode($randpwd)
                         );
            $this->db->where('email',$email);
            $this->db->update('user',$data);
            $mg = new Mailgun("key-e7b9c51f08cdfacaf18603c965990109");
            $domain = "youzenyang.com";
            
            $letter = "您好:
            这是您的新密码 $randpwd
            请妥善保,
            谢谢！";
            # Now, compose and send your message.
            $mg->sendMessage($domain, array('from'    => 'admin@fitness.com', 
                                  'to'      => $email, 
                                  'subject' => "'光彪楼健身房'密码更改", 
                                  'text'    => $letter));
            $message['state'] = "success";
            $this->output->set_content_type('application/json')->set_output(json_encode($message));
        }
        else
        { 
            $message['state'] = "fail";
            $message['detail'] = "emailInvalid";
            $this->output->set_content_type('application/json')->set_output(json_encode($message));
        }
    }

}