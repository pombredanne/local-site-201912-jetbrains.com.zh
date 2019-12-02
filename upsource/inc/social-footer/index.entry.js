import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1632,
      name: 'Upsource',
      newsletter: 'jetBrainsUpsourcenewsletters'
    }}
    socialLinks={[
      {
        href: '//upsource-support.jetbrains.com/hc/en-us/community/topics/',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/UP',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/upsource/',
        type: 'blog',
        text: i18n._(t`Upsource blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/upsource_jb',
        type: 'twitter',
        text: i18n._(t`@Upsource_Jb on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
