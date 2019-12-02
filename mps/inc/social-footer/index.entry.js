import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1633,
      name: 'MPS',
      newsletter: 'mPSNewsletter',
      title: i18n._(t`Send me MPS news from time to time`)
    }}
    socialLinks={[
      {
        href:
          '//mps-support.jetbrains.com/hc/en-us/community/topics/200363779-MPS',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/MPS',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/mps/',
        type: 'blog',
        text: i18n._(t`MPS blog`)
      },
      {
        href:
          '//confluence.jetbrains.com/display/MPS/MPS+Languages+Repository#MPSLanguagesRepository-Bundledlanguages',
        type: 'plugin',
        text: i18n._(t`Language repository`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/jetbrains_mps',
        type: 'twitter',
        text: i18n._(t`@Jetbrains_MPS on Twitter`)
      },
      {
        href: '//www.youtube.com/user/JetBrainsTV/search?query=MPS',
        type: 'youtube'
      }
    ]}
  />,
  'social-footer'
);
