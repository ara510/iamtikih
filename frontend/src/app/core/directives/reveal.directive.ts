import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

/**
 * Révèle l'élément quand il entre dans le viewport.
 * Usage : <div appReveal [revealDelay]="0.15">…</div>
 */
@Directive({
  selector: '[appReveal]',
  host: {
    'data-reveal': '',
    '[style.--reveal-delay]': 'revealDelay() + "s"',
  },
})
export class RevealDirective implements OnDestroy {
  readonly revealDelay = input(0, { alias: 'revealDelay' });

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.observe());
  }

  private observe(): void {
    const el = this.host.nativeElement as HTMLElement;

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          this.observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
