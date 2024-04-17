import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;


  constructor() {
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(cahnges: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(cahnges);
    console.log('-'.repeat(10));
    const duration = cahnges['duration']
    console.log(duration);

    if(duration) {
      this.doSomething()
    }

  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('Duration => ' + this.duration);
    console.log('Message => ' + this.message);

    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update(prevState => prevState + 1);
    }, 1000)

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('Changes');

  }
}
