import { asset } from '../utils/asset.js'

export default function CardboardMascots() {
  return (
    <div className="mascots" aria-label="animated corrugated cardboard animals">
      <img src={asset('/images/cardboard-animals.png')} alt="corrugated cardboard animal characters" />
    </div>
  )
}
