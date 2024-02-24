function validate()
{
 var u1=document.getElementById("user").value;
 console.log(u1);
 var user_regex=/^[a-z]+$/ig;
 var u2=user_regex.test(u1);
 if(u2==false)
 {
     alert('You are not STEVE!');
     
 }
 var p=document.getElementById('pass').value;
 var pass_regex=/(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}/g;
 var pass=pass_regex.test(p);
 if(pass==false)
 {
     alert('STEVE would know his password!');
     
 }


}