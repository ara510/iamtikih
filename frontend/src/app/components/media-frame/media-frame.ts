import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

/**
 * Cadre média : affiche l'image si elle existe, sinon un aplat de secours.
 * Permet de livrer le site avant réception des assets.
 */
@Component({
  selector: 'app-media-frame',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="media" [class.media--empty]="failed()">
      @if (src() && !failed()) {
        <img
          [src]="src()"
          [alt]="alt()"
          [style.object-position]="focus()"
          loading="lazy"
          decoding="async"
          (error)="failed.set(true)"
        />
      } @else {
        <span class="media__ghost" aria-hidden="true">{{ label() }}</span>
      }
    </figure>
  `,
  styles: `
    :host {
      display: block;
      height: 100%;
    }

    .media {
      display: grid;
      place-items: center;
      height: 100%;
      margin: 0;
    }

    .media--empty::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        repeating-linear-gradient(
          45deg,
          rgb(var(--cream-rgb) / 0.05) 0 12px,
          transparent 12px 24px
        );
    }

    .media__ghost {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 4vw, 3rem);
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: rgb(var(--cream-rgb) / 0.38);
      padding: 0 1rem;
      text-align: center;
    }
  `,
})
export class MediaFrame {
  readonly src = input('');
  readonly alt = input('');
  readonly label = input('Tikih');
  /** Point de mire du recadrage, ex. 'center 75%' — voir `object-position`. */
  readonly focus = input('center');
  protected readonly failed = signal(false);
}
