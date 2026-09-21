import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  HostListener,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BRAND, NAV, SOCIALS } from '../../core/data/site-content';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '[class.is-stuck]': 'scrolled()',
    '[class.is-open]': 'menuOpen()',
  },
})
export class Header implements OnDestroy {
  protected readonly brand = BRAND;
  protected readonly nav = NAV;
  protected readonly socials = SOCIALS;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  private readonly document = inject(DOCUMENT);

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(this.document.defaultView!.scrollY > 24);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.menuOpen()) this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.document.body.classList.toggle('is-locked', this.menuOpen());
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.document.body.classList.remove('is-locked');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('is-locked');
  }
}
