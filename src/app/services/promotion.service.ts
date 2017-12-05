import {Injectable} from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import {DISHES} from '../shared/dishes';
import {Dish} from '../shared/dish';

@Injectable()
export class PromotionService {

  constructor() {
  }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter((promotion) => (promotion.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => (promotion.featured))[0];
  }
}
