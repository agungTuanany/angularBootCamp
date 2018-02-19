import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',  
  // templateUrl: './servers.component.html'
  selector: 'app-servers',
  // template: `
  // <app-server></app-server> 
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created '
  constructor() { 
    // function() {}
    setTimeout( () => {
      this.allowNewServer =  true;
    },2000); 
      
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created'
  }
}
