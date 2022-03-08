// Mailchimp form
// For embedding as a call to action
// populated by configuration

const Mailchimp = () => {
  let htmlForm = `<form action="https://becomist.us7.list-manage.com/subscribe/post?u=${mailchimp.u}&amp;id=${mailchimp.id}" method="post" name="mc-embedded-subscribe-form" class="wj-contact-form validate w-100" target="_blank" novalidate ><div class="mc-field-group"><input type="email" placeholder="Enter e-mail" name="EMAIL" class="required email form-control w-100" id="mce-EMAIL" autocomplete="on" required /><button type="submit" value="Submit" name="submit" class="heart btn btn-primary text-white btn-block w-100 mt-2" >Submit</button></div></form>`;

  return <div dangerouslySetInnerHTML={{ __html: htmlForm }} />;
};

export default Mailchimp;
