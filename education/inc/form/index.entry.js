// JS modules
import dispatcher from 'utils/dispatcher';
import Select from 'webteam-ui/components/select';
import Form from 'components/form';

import router from 'webteam-ui/utils/router';
import {ConsentId} from 'webteam-ui/components/privacy-checkbox/privacy-data-utils';

import 'webteam-ui/components/radio';
import {pushDatalayerData} from "components/form/push-datalayer-data";

// Page scripts starts here
dispatcher.domReady(function () {

  //work with form
  $('input[name=privacyConsent]').attr('data-consent', 'zendeskApplication').addClass('js-consent');

  Form('.js-form', {
    sendsPrivacyData: true,
    consentId: ConsentId.zendeskApplication,
    customConsentId: true,
    validation: {
      submitHandler: function (form) {
        pushDatalayerData(form, 'Submit Success');
        let educationRoleValues = [];

        $(form).find('input[type=checkbox][name=zd_interest]:checked').each((idx, checkbox) => {
          educationRoleValues.push($(checkbox).val());
        });

        educationRoleValues = educationRoleValues.join(' ');

        let mktoFormData = {
          formid: 3181,
          subId: 62,
          'educationalRole': educationRoleValues,
          'Used_Languages[]': $('.js-select').val(),
          subscriptionTopicWelcomeEmail: 'Educational Tools Newsletter',
          Email: $(form).find('input[type=email]').val(),
          privacyConsent: $(form).find('input[name=privacyConsent]').val(),
          forsalesblastdetails: $(form).find('textarea[name=zd_tell_us_more]').val(),
          eduToolsNewsletter: $(form).find('input[type=checkbox][name=zd_newsletter]:checked').val()
        };

        let paramedData = $.param(mktoFormData);
        const submitUrl = 'https://app-lon02.marketo.com/index.php/leadCapture/save';

        let privacyConsentAcceptedCheckbox = $(form).find('input[name="privacyConsent"]:checked');

        if (privacyConsentAcceptedCheckbox.length > 0) {
          this.privacyCheckboxInstance.sendConsent(form, !__DEV__).always(e => {
            if ($(form).find('input[name=zd_newsletter]:checked').val()) {
              $.ajax({
                type: 'POST',
                url: submitUrl,
                data: paramedData
              }).always(function () {
                form.submit();
              });
            } else {
              form.submit();
            }
          });
        }
      }
    }
  });


  //work with selects
  $('.js-select').each((idx, select) => {
    Select($(select));
  });

});