export class Unit
{
    Unit : string;
    Cost : string;
    Hit_Speed: string;
    Speed:string;
    Deploy_Time: string;
    Range: string;
    Target: string;
    Count: string;
    Transport: string;
    Type: string;
    Rarity: string;
    constructor(Unit: string, Cost: string, Hit_Speed: string, Speed: string, Deploy_Time: string,Range: string, Target: string,Count: string, Transport: string, Type: string, Rarity: string ){
      this.Unit = Unit;
      this.Cost = Cost;
      this.Hit_Speed = Hit_Speed;
      this.Speed = Speed;
      this.Deploy_Time = Deploy_Time;
      this.Range = Range;
      this.Target = Target;
      this.Count = Count;
      this.Transport = Transport;
      this.Type = Type;
      this.Rarity = Rarity;
    }
}
