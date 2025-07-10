import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
/**
 * Device Portal Dashboard main component: renders sidebar & card-based dashboard.
 * Controls sidebar collapse, section selection, and provides SVG icons as strings.
 */
export class AppComponent {
  title = 'Device Portal Dashboard';
  sidebarCollapsed = false;
  selectedSection = 'device';

  icons = {
    device:
      `<svg width="24" height="24"><circle cx="12" cy="12" r="9" fill="#33c7a5"/><rect x="8" y="6" width="8" height="12" rx="3" fill="#fff"/></svg>`,
    cpu:
      `<svg width="24" height="24"><rect x="3" y="7" width="18" height="10" rx="2" fill="#b085f7"/><rect x="8" y="10" width="8" height="4" rx="1" fill="#fff"/></svg>`,
    ram:
      `<svg width="24" height="24"><rect x="4" y="8" width="16" height="8" rx="2" fill="#34d5a6"/><rect x="8" y="10" width="8" height="4" rx="1" fill="#fff"/></svg>`,
    temp:
      `<svg width="24" height="24"><rect x="9" y="4" width="6" height="12" rx="3" fill="#e877c9"/><circle cx="12" cy="17" r="4" fill="#fabc60"/></svg>`,
    uptime:
      `<svg width="24" height="24"><circle cx="12" cy="12" r="8" fill="#ceafe1"/><path d="M12 8v4l3 3" stroke="#b87a3b" stroke-width="2" fill="none"/></svg>`,
    diagnostics:
      `<svg width="24" height="24"><polygon points="5,19 12,5 19,19" fill="#e877c9"/><rect x="11" y="15" width="2" height="4" fill="#fff"/></svg>`,
    upload:
      `<svg width="20" height="20"><path d="M10 14v-6m0 0l-3 3m3-3l3 3" stroke="#b085f7" stroke-width="2" fill="none"/></svg>`,
    download:
      `<svg width="20" height="20"><path d="M10 6v6m0 0l-3-3m3 3l3-3" stroke="#fabc60" stroke-width="2" fill="none"/></svg>`,
    control:
      `<svg width="24" height="24"><rect x="6" y="6" width="12" height="12" rx="4" fill="#fabc60"/><circle cx="12" cy="12" r="3" fill="#fff"/></svg>`,
    reboot:
      `<svg width="24" height="24"><path d="M12 5v5l4 3" stroke="#b87a3b" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="9" stroke="#fabc60" stroke-width="2" fill="none"/></svg>`,
    reset:
      `<svg width="24" height="24"><rect x="6" y="6" width="12" height="12" rx="4" fill="#e6af34"/><path d="M8 12h8" stroke="#fff" stroke-width="2"/></svg>`,
    clients:
      `<svg width="30" height="30"><circle cx="15" cy="15" r="13" fill="#b0e889"/><circle cx="15" cy="15" r="6" fill="#fff"/></svg>`,
    log:
      `<svg width="24" height="24"><rect x="4" y="4" width="16" height="16" rx="6" fill="#bfc18e"/><path d="M8 10h8v2H8zm0 4h6v2H8z" fill="#fff"/></svg>`,
    downloadAll:
      `<svg width="18" height="18"><path d="M9 3v8M9 11l3-3M9 11l-3-3" stroke="#bfc18e" stroke-width="2" fill="none"/><rect x="3" y="14" width="12" height="2" rx="1" fill="#bfc18e"/></svg>`,
    downloadRecent:
      `<svg width="18" height="18"><rect x="4" y="2" width="10" height="7" rx="2" fill="#e7e9e6"/><rect x="4" y="9" width="10" height="7" rx="2" fill="#bfc18e"/></svg>`,
  };

  sidebarNav = [
    { label: 'Device Info', section: 'device', icon: this.icons.device, bgColor: 'var(--accent-green)' },
    { label: 'Performance', section: 'perf', icon: this.icons.cpu, bgColor: 'var(--accent-purple)' },
    { label: 'Diagnostics', section: 'diagnostics', icon: this.icons.diagnostics, bgColor: 'var(--accent-pink)' },
    { label: 'Clients', section: 'clients', icon: this.icons.clients, bgColor: 'var(--accent-gold)' },
    { label: 'Control', section: 'control', icon: this.icons.control, bgColor: 'var(--accent-brown)' },
    { label: 'Log', section: 'log', icon: this.icons.log, bgColor: 'var(--accent-gray)' },
  ];

  // PUBLIC_INTERFACE
  selectSection(section: string) {
    this.selectedSection = section;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  scrollSidebar(event?: Event) {
    // stub: add sidebar scroll if overflowed, for now just prevent focus outline if clicked
    if (event) { (event.target as HTMLElement).blur(); }
  }
}
