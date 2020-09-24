import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'iam-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  isShown:boolean = false;

  constructor(private authService:  AuthService) { }

  ngOnInit() {
  }
}

