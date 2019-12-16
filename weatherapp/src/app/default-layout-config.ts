import { LayoutConfig } from '@spartacus/storefront';

export const weatherLayoutConfig: LayoutConfig = {
    layoutSlots: {
        header: {
          md: {
            slots: [
              'PreHeader',
              'SiteContext',
              'SiteLinks',
              'SiteLogo',
              'SearchBox',
              'SiteLogin',
              'MiniCart',
              'NavigationBar',
            ],
          },
          xs: {
            slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
          },
        },
        navigation: {
          md: { slots: [] },
          xs: {
            slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
          },
        },
        footer: {
          slots: ['Footer'],
        },
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
