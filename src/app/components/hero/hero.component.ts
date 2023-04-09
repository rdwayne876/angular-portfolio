import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { styles } from 'src/styles';
import * as THREE from 'three'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{

  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  styles = styles
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement})

  ngOnInit(): void{
    this.renderer.setSize(window.innerWidth, window.innerHeight )
  }

}
