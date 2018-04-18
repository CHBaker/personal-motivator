import { Injectable } from '@angular/core';

export interface IEmotionScore {
  anger: number;
  contempt: number;
  disgust: number;
  fear: number;
  happiness: number;
  neutral: number;
  sadness: number;
  surprise: number;
}

const GRATITUDE_QUOTES = [
  "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
  "Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for.",
  "Learn to be thankful for what you already have, while you pursue all that you want.",
  "Be thankful for what you have; you’ll end up having more. If you concentrate on what you don’t have, you will never, ever have enough.",
  "‘Thank you’ is the best prayer that anyone could say. I say that one a lot. Thank you expresses extreme gratitude, humility, understanding.",
];

const MOTIVATION_QUOTES = [
  "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
  "If you can dream it, you can do it.",
  "Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.",
  "Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
  "Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

@Injectable()
export class CannedResponseService {

  getResponse(sentiment = 'happiness', score = 1): string {
    switch(sentiment) {
      case 'anger':
        return "Try meditation";
      case 'contempt':
        return `Looks like you're contempt :(
          Here's a motivational quote:

          ${this.randomMotivation()}
          `;
      case 'disgust':
        return `You're disgusted? Why?
          Here's a motivational quote:

          ${this.randomMotivation()}
          `;
      case 'fear':
          return `Don't be afraid!
            Here's a motivational quote:

            ${this.randomMotivation()}
            `;
      case 'happiness':
        if (score < 0.66) {
          return `Looks like you're not happy :(
            Here's a motivational quote:

            ${this.randomMotivation()}
            `;
        } else {
          return `Yay! It's great you're happy!
            Here's a gratitude quote:

            ${this.randomGratitude()}
            `
        }
      case 'neutral':
        return `You're neutral, but we want you to be happy.
        Here's a motivational quote:

        ${this.randomMotivation()}
        `;
      case 'sadness':
        if (score > 0.66) {
          return `Looks like you're sad :(
            Here's a motivational quote:

            ${this.randomMotivation()}
            `;
        } else {
          return `Yay! It's great you're not sad!
            Here's a gratitude quote:

            ${this.randomGratitude()}
            `
        }
      case 'surprise':
        return `You look surprised! Hopefully it was a good surprise.
          Here's a gratitude quote:

          ${this.randomGratitude()}
          `;
    }
    return `We couldn\'t detect your emotion :/ Here's motivational quote:
      ${this.randomMotivation}
      `;
  }

  private randomGratitude(): string {
    return GRATITUDE_QUOTES[this.random(GRATITUDE_QUOTES.length)];
  }

  private randomMotivation(): string {
    return MOTIVATION_QUOTES[this.random(MOTIVATION_QUOTES.length)];
  }

  private random(n: number): number {
    return Math.floor(Math.random() * n);
  }
}
