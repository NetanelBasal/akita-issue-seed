import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private authStore: AuthStore) {}
}
