import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoRibbon } from '../../components/logo-ribbon/logo-ribbon';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { CTA, PARTNER_GROUPS, PRIMARY_PARTNERS, REFERENCES } from '../../core/data/site-content';

@Component({
  selector: 'app-references',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, LogoRibbon, RevealDirective],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  protected readonly intro = REFERENCES;
  protected readonly primary = PRIMARY_PARTNERS;
  protected readonly groups = PARTNER_GROUPS;
  protected readonly cta = CTA;

  /** Tous les partenaires, pour les deux rubans défilants. */
  private readonly all = [...PRIMARY_PARTNERS.partners, ...PARTNER_GROUPS.flatMap((g) => g.partners)];

  protected readonly ribbonTop = computed(() => this.all.filter((_, i) => i % 2 === 0));
  protected readonly ribbonBottom = computed(() => this.all.filter((_, i) => i % 2 === 1));
  protected readonly total = this.all.length;
}
