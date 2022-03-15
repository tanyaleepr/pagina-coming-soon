function mailMe(form){
    Subject=document.testform.inputbox1.value
    CC= document.testform.inputbox2.value
    BCC= document.testform.inputbox3.value
    location = "/javaworld/cgi-bin/jw-mailto.cgi?tanyaleepr@gmail.com?subject="+Subject+"&Bcc="+
        BCC+"&cc="+CC
    document.testform.submit();
}