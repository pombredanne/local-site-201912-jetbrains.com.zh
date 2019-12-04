import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    socialLinks={[
      {
        href:
          '//resharper-support.jetbrains.com/hc/en-us/community/topics/200366089-ReSharper-C-',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/RSCPP',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/rscpp/',
        type: 'blog'
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/resharper_cpp',
        type: 'twitter',
        text: i18n._(t`@resharper_cpp on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
