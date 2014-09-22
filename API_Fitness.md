---
#光彪楼健身房网站API
---

---
##注册/登陆
---
**1.[POST]**`index.php/log/login`
---
####postname:
<pre>
username
password
</pre>
####response:
<pre>
{state:success}
{state:fail}
</pre>

---
**2.[POST]**`index.php/log/signup`
---
####postname:
<pre>
username
realname
password
level
</pre>
####response:
<pre>
{state:success}
{state:fail}
</pre>

---
**3.[GET]**`index.php/log/logout`
---
####response:
<pre>
{state:success}
</pre>

---
##排班系统
---
**1.[POST]**`index.php/scheme/arrange`(除了男员工的排班)
---
####postname:
<pre>
day => {1,2,3,4,5,6,7}
period => {0,1} 
</pre>
####response:
<pre>
{
	 state:success/fail
	 scheme[1][0] = {
								 uid
								 realname
								}
}
</pre>

---
**2.[POST]**`index.php/scheme/boy_arrange`(男员工的排班)
---
####postname:
<pre>
day => {1,2,3,4,5,6,7}
period => {0,1} 
</pre>
####response:
<pre>
{
	 state:success/fail
	 scheme[1][0][0]= {
								 uid
								 realname
								}
}
</pre>
