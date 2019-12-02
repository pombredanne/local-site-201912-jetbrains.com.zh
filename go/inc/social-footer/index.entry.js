import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 2765,
      name: 'GoLand',
      newsletter: 'goglandNewsletter'
    }}
    socialLinks={[
      {
        href: '//youtrack.jetbrains.com/issues/GO',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/go/',
        type: 'blog',
        text: i18n._(t`GoLand blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/GoLandIDE',
        type: 'twitter',
        text: i18n._(t`@GoLandIDE on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
