import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    socialLinks={[
      {
        href: '//hub-support.jetbrains.com/hc/communities/public/topics',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/JPS',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/hub/',
        type: 'blog',
        text: i18n._(t`Hub blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/jetbrains_hub',
        type: 'twitter',
        text: i18n._(t`@Jetbrains_Hub on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
