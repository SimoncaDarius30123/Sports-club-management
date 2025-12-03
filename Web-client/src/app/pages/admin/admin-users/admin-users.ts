import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ClientAccount } from '../../../interfaces/clientAccount.interface';
import { AdminService } from '../../../services/admin-service';

@Component({
  selector: 'app-admin-users',
  imports: [],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.scss',
})
export class AdminUsers {

  users: ClientAccount[] = [];
  adminService = inject(AdminService);
  cdt = inject(ChangeDetectorRef);

  ngOnInit() {
    this.adminService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.cdt.detectChanges();
      }
    })
  }

  deleteUser(userId: number) {
    const confirmDelete = confirm("Are you sure you want to BAN this user?");
    if (confirmDelete) {
      this.adminService.deleteUser(userId).subscribe({
        next: () => {
          window.location.reload();
          this.cdt.detectChanges();
        }
      })
    }
  }

}
