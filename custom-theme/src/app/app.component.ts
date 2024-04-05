import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-theme';

  name = 'Angular ' + VERSION.major;
  isZoomed = false;
  pos = { top: 0, left: 0, x: 0, y: 0 };

  @ViewChild('container') 'container': ElementRef;
  @ViewChild('img') 'img': ElementRef;
  ngOnInit() { }


  onClick(e: any) {
    console.log(e.clientY, e.clientX);
    this.isZoomed = !this.isZoomed;
    if (this.isZoomed) {
      this.container.nativeElement.style.overflow = 'hidden';
      this.img.nativeElement.style.width = '200%';
      this.img.nativeElement.style.cursor = 'zoom-out';
      this.img.nativeElement.style.cursor = 'zoom-out';
      this.img.nativeElement.style.left = `-${e.clientX}`;
      this.img.nativeElement.style.top = `-${e.clientY}`;
    } else {
      this.container.nativeElement.style.overflow = 'hidden';
      this.img.nativeElement.style.width = '100%';
      this.img.nativeElement.style.cursor = 'zoom-in';
    }
  }
  onMouseDown(e: any) {
    this.pos = {
      // The current scroll
      left: this.container.nativeElement.scrollLeft,
      top: this.container.nativeElement.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
  }

  mouseMoveHandler(e: any) {
    // How far the mouse has been moved
    const dx = (e.clientX - this.pos.x) * 2;
    const dy = (e.clientY - this.pos.y) * 3;

    // Scroll the element
    this.container.nativeElement.scrollTop = this.pos.top - dy;
    this.container.nativeElement.scrollLeft = this.pos.left - dx;
  }

  onLeave() {
    this.container.nativeElement.style.overflow = 'hidden';
    this.img.nativeElement.style.transform = 'scale(1)';
    this.img.nativeElement.style.cursor = 'zoom-in';
  }
}
