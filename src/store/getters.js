export const playgroundCollection = state => (
  state.playground.all.map(playgroundId =>
    state.entities.data.playgrounds[playgroundId],
  )
);

export const getSelectedPlayground = (state) => {
  const selectedPlaygroundId = state.playground.selected;

  if (!selectedPlaygroundId) {
    return null;
  }

  return state.entities.data.playgrounds[selectedPlaygroundId];
};

export const getSelectedPlaygroundsEquipment = (state) => {
  const selectedPlayground = getSelectedPlayground(state);

  if (!selectedPlayground) {
    return [];
  }

  return selectedPlayground.equipments
    .map(id => state.entities.data.equipments[id]);
};

export const getSelectedPlaygroundsComments = (state) => {
  const selectedPlayground = getSelectedPlayground(state);

  if (!selectedPlayground) {
    return [];
  }

  return selectedPlayground.comments
    .map(id => state.entities.data.comments[id]);
};
