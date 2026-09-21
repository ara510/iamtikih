import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';

/**
 * Lecteur YouTube en « façade » : on n'affiche d'abord que la vignette.
 * L'iframe (≈1 Mo de scripts par vidéo) n'est chargée qu'au clic, ce qui évite
 * de plomber le chargement de la page avec trois lecteurs simultanés.
 */
@Component({
  selector: 'app-youtube-embed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="yt">
      @if (playing()) {
        <iframe
          class="yt__frame"
          [src]="embedUrl()"
          [title]="title()"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      } @else {
        <button class="yt__poster" type="button" (click)="play()">
          <img
            [src]="'https://i.ytimg.com/vi/' + videoId() + '/maxresdefault.jpg'"
            [alt]="title()"
            loading="lazy"
            decoding="async"
          />
          <span class="yt__scrim" aria-hidden="true"></span>
          <span class="yt__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span class="visually-hidden">Play — {{ title() }}</span>
        </button>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .yt {
      position: relative;
      aspect-ratio: 16 / 9;
      border-radius: 18px;
      overflow: hidden;
      background: var(--abyss);
    }

    .yt__frame {
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
    }

    .yt__poster {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      cursor: pointer;
    }

    .yt__poster img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1.1s var(--ease);
    }

    .yt__scrim {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgb(var(--abyss-rgb) / 0.1),
        rgb(var(--abyss-rgb) / 0.45)
      );
      transition: opacity 0.5s var(--ease);
    }

    .yt__play {
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
      display: grid;
      place-items: center;
      width: clamp(56px, 6vw, 76px);
      aspect-ratio: 1;
      border-radius: 50%;
      background: var(--aqua);
      color: var(--abyss);
      padding-left: 3px;
      transition:
        transform 0.45s var(--ease),
        background 0.45s var(--ease);
    }

    @media (hover: hover) and (pointer: fine) {
      .yt__poster:hover img {
        transform: scale(1.05);
      }

      .yt__poster:hover .yt__scrim {
        opacity: 0.6;
      }

      .yt__poster:hover .yt__play {
        transform: scale(1.1);
      }
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,
})
export class YoutubeEmbed {
  readonly videoId = input.required<string>();
  readonly title = input('');

  private readonly sanitizer = inject(DomSanitizer);
  protected readonly playing = signal(false);

  protected readonly embedUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      // nocookie : pas de traçage tant que le visiteur n'a pas lancé la vidéo.
      `https://www.youtube-nocookie.com/embed/${this.videoId()}?autoplay=1&rel=0`,
    ),
  );

  protected play(): void {
    this.playing.set(true);
  }
}
