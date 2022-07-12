
    var mndFileds=new Array('Last Name','Email','Mobile');
    var fldLangVal=new Array('Last Name','Email','Phone/Whatsapp'); 
    var name='';
    var email='';

  /* Do not remove this code. */
    function rccallback() {
     document.getElementById('formsubmit').removeAttribute('disabled');
  if(document.getElementById('privacyTool')!=undefined){ 
   var recap = document.getElementById('recap');
   recap.setAttribute('captcha-verified',true);
   }
   }
   function checkReCapSubmit() { 
   if(document.getElementById('recap') != undefined){ 
   var submitbutton = document.getElementById('formsubmit');
   var recap = document.getElementById('recap');
  if( recap.getAttribute('captcha-verified') == 'false'){
  submitbutton.setAttribute('disabled', true);
  }
   }
   } 

  function validateEmail()
  {
    var emailFld = document.querySelectorAll('[ftype=email]');
    var i;
    for (i = 0; i < emailFld.length; i++)
    {
      var emailVal = emailFld[i].value;
      if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
      {
        var atpos=emailVal.indexOf('@');
        var dotpos=emailVal.lastIndexOf('.');
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
        {
          alert('Please enter a valid email address. ');
          emailFld[i].focus();
          return false;
        }
      }
    }
    return true;
  }

    function checkMandatory1742164000011732012() {
    for(i=0;i<mndFileds.length;i++) {
      var fieldObj=document.forms['WebToLeads1742164000011732012'][mndFileds[i]];
      if(fieldObj) {
      if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
       if(fieldObj.type =='file')
        { 
         alert('Please select a file to upload.'); 
         fieldObj.focus(); 
         return false;
        } 
      alert(fldLangVal[i] +' cannot be empty.'); 
              fieldObj.focus();
              return false;
      }  else if(fieldObj.nodeName=='SELECT') {
             if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
        alert(fldLangVal[i] +' cannot be none.'); 
        fieldObj.focus();
        return false;
         }
      } else if(fieldObj.type =='checkbox'){
       if(fieldObj.checked == false){
        alert('Please accept  '+fldLangVal[i]);
        fieldObj.focus();
        return false;
         } 
       } 
       try {
           if(fieldObj.name == 'Last Name') {
        name = fieldObj.value;
          }
      } catch (e) {}
        }
    }
    trackVisitor();
    if(!validateEmail()){return false;}
    
    document.getElementById('formsubmit').disabled=true;
  }
var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'c05df4776769e15ce13c4bd11b628a53a545f1026b33be6f0d5cd71b5445a803410f086143824445e881c9a13f58d684', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.com/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads1742164000011732012']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads1742164000011732012']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads1742164000011732012']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}
 

      $(document).ready(function(){
          // Add minus icon for collapse element which is open by default
          $(".collapse.show").each(function(){
            $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
          });
          
          // Toggle plus minus icon on show hide of collapse element
          $(".collapse").on('show.bs.collapse', function(){
            $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
          }).on('hide.bs.collapse', function(){
            $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
          });
      });
    
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("id_header").style.backgroundColor = "white";
          document.getElementById("id_logo").style.width = "50px";
          document.getElementById("id_logo").style.transition = ".5s all";
        } else {
          document.getElementById("id_header").style.backgroundColor = "white";
          document.getElementById("id_logo").style.width = "60px";
          document.getElementById("id_logo").style.transition = ".5s all";
        }
      }
   

    
      $zoho.salesiq.ready= function(embedinfo)
      {
      $zoho.salesiq.customfield.add(
      {
      "name":"Mobile",
      "hint":"Your Phone or WhatsApp number"
      });
      }
  
  $(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('#id_header').addClass("stickyadd");
  }
  else{
    $('header').removeClass("stickyadd");
  }
});

            $(document).ready(function() {
              $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: false,
                    margin: 20
                  }
                }
              })
            })
          