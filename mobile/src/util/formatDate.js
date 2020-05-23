import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export const formatDate = date =>
  format(parseISO(date), "dd 'de' MMMM', às' HH'h'", {
    locale: pt,
  });