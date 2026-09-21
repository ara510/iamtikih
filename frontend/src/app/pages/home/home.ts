import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Marquee } from '../../components/marquee/marquee';
import { MediaFrame } from '../../components/media-frame/media-frame';
import { YoutubeEmbed } from '../../components/youtube-embed/youtube-embed';
import { RevealDirective } from '../../core/directives/reveal.directive';
import {
  ABOUT,
  BRAND,
  COMMUNITY,
  CTA,
  FEED,
  FILMS,
  GEAR,
  GEAR_BRANDS,
  HERO,
  KEY_TOPICS,
  PILLARS,
  PLATFORMS,
  PRIMARY_PARTNERS,
  REFERENCES,
  STATS_2026,
  TOPICS,
  VIDEOS,
} from '../../core/data/site-content';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Marquee, MediaFrame, YoutubeEmbed, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly brand = BRAND;
  protected readonly hero = HERO;
  protected readonly pillars = PILLARS;
  protected readonly about = ABOUT;
  protected readonly topics = TOPICS;
  protected readonly keyTopics = KEY_TOPICS;
  protected readonly films = FILMS;
  protected readonly videos = VIDEOS;
  protected readonly community = COMMUNITY;
  protected readonly platforms = PLATFORMS;
  protected readonly stats = STATS_2026;
  protected readonly references = REFERENCES;
  protected readonly primaryPartners = PRIMARY_PARTNERS;
  protected readonly gear = GEAR;
  protected readonly gearBrands = GEAR_BRANDS;
  protected readonly feed = FEED;
  protected readonly cta = CTA;
}
