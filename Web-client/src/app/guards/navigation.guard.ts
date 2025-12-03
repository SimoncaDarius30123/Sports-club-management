import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataTransferService } from '../services/data-transfer-service';

export const navigationGuard: CanActivateFn = () => {
  const dataService = inject(DataTransferService);
  const router = inject(Router);

  let chosenSport: string | null = null;

  dataService.data$.subscribe(data => {
    chosenSport = data ? data.name : null;
  });

  if (!chosenSport) {
    alert('Chose a sport first!');
    router.navigate(['/client/home']);
    return false;
  }

  return true;
};
