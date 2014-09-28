<?php $config = array(
         'signup'=>array(
		             array(
					        'field'=>'email',
							'label'=>'email',
							'rules'=>'required|valid_email|is_unique[user.email]'
					      ),
		             array(
					        'field'=>'username',
							'label'=>'username',
							'rules'=>'required|is_unique[user.username]'
					      ),
				     array(
					        'field'=>'password',
							'label'=>'password',
							'rules'=>'required|min_length[6]|max_length[16]|alpha_dash'
					      ),		  
				     array(
					        'field'=>'realname',
							'label'=>'realname',
							'rules'=>'required|alpha_numeric_chinese|max_length[8]'
					      ),
				     array( 
				     	    'field'=>'level',
				     	    'label'=>'level',
				     	    'rules'=>'required'
				     	  ),
		              ),
         'change_password'=>array
                      (
                      	 array(
                      	 	    'field' => 'oldpassword',
                      	 	    'label' => 'oldpassword',
                      	 	    'rules' => 'required'
                      	 	  ),

                         array(
					         'field'=>'newpassword',
							'label'=>'newpassword',
							'rules'=>'required|min_length[6]|max_length[16]|alpha_dash'
					        )					   
					  )
         );			   
?>
