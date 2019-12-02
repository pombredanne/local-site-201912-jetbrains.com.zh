import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1627,
      name: 'CLion',
      newsletter: 'cLionNewsletters'
    }}
    socialLinks={[
      {
        href:
          '//intellij-support.jetbrains.com/hc/en-us/community/topics/200363649-CLion',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/CPP',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/clion/',
        type: 'blog',
        text: i18n._(t`CLion blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/clion_ide',
        type: 'twitter',
        text: i18n._(t`@CLion_ide on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
