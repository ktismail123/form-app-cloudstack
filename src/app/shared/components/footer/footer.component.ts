import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <div class="footer-container">
        <div class="copyright">
          © 2023, The Helper Bees All Rights Reserved.
        </div>
        <div class="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .app-footer {
      padding: 1rem 0;
    border-top: 1px solid #e9ecef;
    }
    
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .copyright {
      color: #6c757d;
      font-size: 0.875rem;
    }
    
    .footer-links {
      display: flex;
      gap: 2rem;
      
      a {
        color: #6c757d;
        text-decoration: none;
        font-size: 0.875rem;
        
        &:hover {
          color: #333;
        }
      }
    }
    
    @media (max-width: 768px) {
      .footer-container {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
      
      .footer-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {}