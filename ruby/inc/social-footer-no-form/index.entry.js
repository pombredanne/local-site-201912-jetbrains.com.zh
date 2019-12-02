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
          '//intellij-support.jetbrains.com/hc/en-us/community/topics/200366799-RubyMine',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/RUBY',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/ruby/',
        type: 'blog',
        text: i18n._(t`RubyMine blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/rubymine',
        type: 'twitter',
        text: i18n._(t`@RubyMine on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
