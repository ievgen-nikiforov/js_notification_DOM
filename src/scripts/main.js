'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const heading = document.createElement('h2');

  heading.textContent = title;
  heading.classList.add('title');
  notification.appendChild(heading);

  const descriptionTag = document.createElement('p');

  descriptionTag.textContent = description;
  notification.appendChild(descriptionTag);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
