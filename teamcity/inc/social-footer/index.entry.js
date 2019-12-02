import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 2903,
      name: 'TeamCity',
      newsletter: 'teamCityBlog',
      title: i18n._(
        t`Subscribe to receive regular product news and blog updates`
      )
    }}
    socialLinks={[
      {
        href: '//teamcity-support.jetbrains.com/hc/en-us/community/topics',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/TW',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/teamcity/',
        type: 'blog',
        text: i18n._(t`TeamCity blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/teamcity',
        type: 'twitter',
        text: i18n._(t`@TeamCity on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
