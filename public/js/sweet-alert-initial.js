document.getElementById("sa-basic").addEventListener("click", function() {
    Swal.fire({
        title: "Any fool can use a computer",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: false
    })
}), document.getElementById("sa-title").addEventListener("click", function() {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        confirmButtonClass: "btn btn-success text-white",
        buttonsStyling: false
    })
}), document.getElementById("sa-success").addEventListener("click", function() {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        showCancelButton: !0,   
        confirmButtonClass: "btn btn-success text-white",
        cancelButtonClass: "btn btn-danger ms-2",
        buttonsStyling: false
    })
}), document.getElementById("sa-warning").addEventListener("click", function() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonClass: "btn btn-success text-white me-2",
        cancelButtonClass: "btn btn-danger",
        buttonsStyling: false,
        footer: '<a href="">Why do I have this issue?</a>',
        confirmButtonText: "Yes, delete it!"
    }).then(function(e) {
        e.value && Swal.fire("Deleted!", "Your file has been deleted.", "success")
    })
}), document.getElementById("sa-long-content").addEventListener("click", function() {    
    Swal.fire({
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'A tall image',
        title: "Are you sure?",                
        confirmButtonClass: "btn btn-success text-white",
        buttonsStyling: false 
    })
});
 document.getElementById("sa-custom-html").addEventListener("click", function() {
    Swal.fire({
        title: '<strong class="bg-light p-2">HTML <u>example</u></strong>',
        icon: 'info',
        html:
            'You can use <b>bold text</b>, ' +
            '<a href="//sweetalert2.github.io">links</a> ' +
            'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonClass: "btn btn-success text-white me-2",
            cancelButtonClass: "btn btn-danger",
            buttonsStyling: false,
            confirmButtonText:
            '<i class="bi-hand-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
            '<i class="bi-hand-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
    })
}), document.getElementById("sa-three-btn").addEventListener("click", function() {
    var e;
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
}), document.getElementById("sa-position").addEventListener("click", function() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: !1,
        timer: 1500
    })
}), document.getElementById("custom-animation").addEventListener("click", function() {
    Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}), 
document.getElementById("pass-para").addEventListener("click", function() {
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success text-white',
    cancelButton: 'btn btn-danger me-2'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true,
  
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})
}), 
document.getElementById("autoclose").addEventListener("click", function(){
    let timerInterval
Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

}),
document.getElementById("rtl-swal").addEventListener("click", function(){    
    Swal.fire({
        title: 'هل تريد الاستمرار؟',
        icon: 'question',
        iconHtml: '؟',
        confirmButtonText: 'نعم',
        cancelButtonText: 'لا',
        showCancelButton: true,
        showCloseButton: true
    })

}),
document.getElementById("ajx-swal").addEventListener("click", function(){    
    Swal.fire({
  title: 'Submit your Github username',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Look up',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    return fetch(`//api.github.com/users/${login}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => {
        Swal.showValidationMessage(
          `Request failed: ${error}`
        )
      })
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    })
  }
})

}),
document.getElementById("cb2").addEventListener("click", function(){
    Swal.fire({
        title: 'Custom width, padding, color, background.',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(""../../line-bg.svg") repeat',
  backdrop: `rgba(0,0,123,0.4) url("../../img/nyan-cat.gif") left top no-repeat`,
    })

}),
document.getElementById("function-attached").addEventListener("click", function() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        }
        
    })
});