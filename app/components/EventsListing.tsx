import Button from "./Button";
import moment from "moment";

type Event = {
  _id: string,
  title?: string,
  description?: string,
  url?: string,
  startDateTime: string,
  endDateTime?: string,
  price?: number,
  location?: {
    address?: string,
    city?: string,
    state?: string,
    zip?: string,
    country?: string,
  },
};

export default function EventsListing({ items }: { items?: Event[] }) {
  if (!items || items.length === 0) return <p>No upcoming events</p>
  
  return (
    <div>
      {items.length > 0 ? items.map((event: Event, index: number) => (
        <div key={event._id} className={`${index > 0 ? 'border-neutral-700 border-t-2 border-dotted' : ''}`}>
          <EventItem event={event} />
        </div>
      )) : null}
    </div>
  )
}

const EventItem = ({ event }: { event: Event }) => {
  const { title, description, url, startDateTime, endDateTime, location } = event;
  const displayEndDate = startDateTime && endDateTime && !moment(startDateTime).isSame(endDateTime, 'day');
  const displayTime = moment(startDateTime).hour() !== 0 && moment(startDateTime).minute() !== 0;
  const addressStuff = [location?.address, location?.city, location?.state, location?.zip].filter(Boolean).join(' ').replace(' ', '+');
  const directionsUrl = addressStuff ? `https://www.google.com/maps?q=${addressStuff}` : undefined;

  return (
    <div className={`my-3 py-3`}>
      <div className={`flex flex-wrap items-center gap-6`}>
        <div className="flex justify-center w-20 gap-2 bg-primary-900 p-2 rounded-sm">
          <DateBox date={startDateTime} />
          {endDateTime && displayEndDate ? <>-<DateBox date={endDateTime} /></> : null}
        </div>
        <div className="flex-1" style={{ overflow: 'hidden' }}>
          <div className="text-2xl mb-1 font-bold leading-none" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', }}><span>{title}</span></div>
          {location ? (
            <p className="flex gap-2 leading-none">
              {location?.city}, {location?.state}
              {directionsUrl ? <a href={directionsUrl} target="_blank" rel="noreferrer">Directions</a> : null}
              {displayTime ? moment(startDateTime).format('h:mm A') : null}
            </p>
          ) : null}
        </div>
        {url ? (
          <div className="w-full md:w-auto">
            <Button size="small" href={url} target="_blank" rel="noreferrer">Learn More</Button>
          </div>
        ) : null}
      </div>

      <p className="mt-3">{description}</p>
    </div>
  )
};

const DateBox = ({ date }: { date: string }) => {
  const month = moment(date).format('MMM');
  const day = moment(date).format('DD');
  const year = moment().year() !== moment(date).year() ? moment(date).format('YYYY') : null;

  return (
    <div className="text-center">
      <div className="leading-none">{month}</div>
      <div className="text-2xl leading-none">{day}</div>
      {year ? <div className="leading-none">{year}</div> : null}
    </div>
  )
}