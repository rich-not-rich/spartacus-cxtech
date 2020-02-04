import { LayoutConfig } from '@spartacus/storefront';

export const weatherLayoutConfig: LayoutConfig = {
    layoutSlots: {
        LandingPage2Template: {
          slots: [
            'WeatherSlot',
            'Section1',
            'Section2A',
            'Section2B',
            'Section2C',
            'Section3',
            'Section4',
            'Section5',
          ],
        }
    }
};
