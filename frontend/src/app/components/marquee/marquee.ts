import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-marquee',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="marquee" [style.--speed]="speed() + 's'" aria-hidden="true">
      @for (pass of [0, 1]; track pass) {
        <div class="marquee__track">
          @for (item of items(); track $index) {
            <span class="marquee__item">{{ item }}</span>
            <span class="marquee__sep">{{ separator() }}</span>
          }
        </div>
      }
    </div>
  `,
  styles: `
    .marquee {
      display: flex;
      width: 100%;
      overflow: hidden;
      user-select: none;
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
      mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
    }

    .marquee__track {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      gap: clamp(1.25rem, 3vw, 3rem);
      padding-right: clamp(1.25rem, 3vw, 3rem);
      animation: slide var(--speed, 32s) linear infinite;
    }

    .marquee__item {
      font-family: var(--font-display);
      font-size: clamp(2.25rem, 6vw, 5rem);
      font-weight: 800;
      line-height: 1;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .marquee__sep {
      font-size: clamp(1rem, 2vw, 1.75rem);
      color: var(--aqua);
    }

    @keyframes slide {
      to {
        transform: translate3d(-100%, 0, 0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .marquee__track {
        animation: none;
      }
    }
  `,
})
export class Marquee {
  readonly items = input<readonly string[]>([]);
  readonly separator = input('✦');
  readonly speed = input(32);
  protected readonly loop = computed(() => this.items());
}
