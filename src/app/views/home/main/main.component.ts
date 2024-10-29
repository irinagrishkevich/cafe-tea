import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";


declare var $: any;
@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  display: string = 'none';
  private observable: Observable<string>
  constructor() {

    this.observable = new Observable(observer => {
      const timer = setTimeout(() => {
        observer.next(this.display = 'block');
        observer.complete();
      }, 2000)

      return {
        unsubscribe() {
          clearTimeout(timer);
        }
      }
    })



  }


  onCloseHandled(){
    this.display='none';
  }

  openModal(){
    this.display='block';
  }


  ngOnInit(): void {

      $("#accordion").accordion({
        heightStyle: 'content'
      });

      this.observable.subscribe(
        {
          error:(err)=> {
            console.log('Error ' + err);
          }
        }
      )






      // $("#zipCode").on("input", function() {
      //   $().val($().val().replace(/\D/g, ''));
      // });
      // $("#submitBtn").click(function() {
      //   let firstName = $("#firstName").val();
      //   let lastName = $("#lastName").val();
      //   let phone = $("#phone").val();
      //   let country = $("#country").val();
      //   let zipCode = $("#zipCode").val();
      //   let address = $("#address").val();
      //   if (!firstName || !lastName || !phone || !country || !zipCode || !address) {
      //     alert("Пожалуйста, заполните все поля.");
      //   } else if (!/^\d+$/.test(zipCode) || zipCode.length !== 6) {
      //     alert("Пожалуйста, введите корректный индекс (6 цифр).");
      //   } else {
      //     $("#orderForm").hide();
      //     $("#contact").hide();
      //     $("#thanksBlock").removeClass("d-none");
      //   }
      // });

  }


}
