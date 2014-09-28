<?php

class Profile_model extends CI_Model{
   
  function change_password(& $message)
    {
        $uid = $this->session->userdata('uid');
        $oldpassword = $this->input->post('oldpassword');
        $newpassword = $this->input->post('newpassword');
        $passwordconf = $this->input->post('passwordconf');
        
        $this->db->select('password');
        $this->db->where('id',$uid);
        $query = $this->db->get('user');
        $row = $query->row_array();
        $password = $row['password'];
        if ($oldpassword == $this->encrypt->decode($password))
        {
            if ($this->form_validation->run('change_password') === FALSE)
            {
                $message['detail'] = form_error('newpassword');
                return FALSE;
            }
            if ($newpassword == $passwordconf)
            {
                $data = array(
                                'password' => $this->encrypt->encode($newpassword)
                              );
                $this->db->where('id',$uid);
                $this->db->update('user',$data);
                return TRUE;
            } 
            else
            {
               $message['detail'] = "inconformity";
               return FALSE;
            }
        }
        else
        {
           $message['detail'] = "passwordWrong";
           return FALSE;
        }
    }   
}
?>