import { Injectable } from '@angular/core';
import { Leader } from '../Shared/leader';
import { LEADERS } from '../Shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Leader[] {
    return LEADERS;
  }

  getLeader(id: string): Leader {
    return LEADERS.filter((lead) => (lead.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
