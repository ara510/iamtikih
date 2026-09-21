import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <section class="nf is-dark">
      <div class="shell nf__inner">
        <p class="eyebrow">Error 404</p>
        <h1 class="nf__title">Lost At<br />Sea</h1>
        <p class="lead">
          This page doesn’t exist — or has drifted somewhere else.
        </p>
        <a class="btn btn--light" routerLink="/">Back home <span class="btn__arrow">→</span></a>
      </div>
    </section>
  `,
  styles: `
    .nf {
      display: grid;
      place-items: center;
      min-height: 100svh;
      background: var(--ink-deep);
      color: var(--cream);
      text-align: center;
    }

    .nf__inner {
      display: grid;
      gap: 1.5rem;
      justify-items: center;
    }

    .nf__title {
      font-family: var(--font-display);
      font-size: var(--fs-display);
      font-weight: 800;
      line-height: 0.82;
      text-transform: uppercase;
      margin: 0;
    }

    .lead {
      text-align: center;
    }
  `,
})
export class NotFound {}
