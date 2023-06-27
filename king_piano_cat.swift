import UIKit

//MARK: - Variables -

var rechargeTimer: Timer?

//MARK: - Structures -

struct RechargeEnergies {
    var physical: Int
    var emotional: Int
    var spiritual: Int
}

//MARK: - Classes -

class RechargeYourMind {
    var physicalEnergy: Int = 0
    var emotionalEnergy: Int = 0
    var spiritualEnergy: Int = 0
    
    var rechargeEnergies: RechargeEnergies {
        return RechargeEnergies(physical: physicalEnergy, emotional: emotionalEnergy, spiritual: spiritualEnergy)
    }
    
    func startRechargeTimer() {
        if rechargeTimer == nil {
            rechargeTimer = Timer.scheduledTimer(timeInterval: 5, target: self, selector: #selector(collectEnergies), userInfo: nil, repeats: true)
        }
    }
    
    @objc func collectEnergies() {
        physicalEnergy += 1
        emotionalEnergy += 1
        spiritualEnergy += 1
    }
    
    func resetEnergies() {
        physicalEnergy = 0
        emotionalEnergy = 0
        spiritualEnergy = 0
    }
}

//MARK: - Extension of viewController -

extension ViewController {
    
    func recharge() {
        let rechargeYourMind = RechargeYourMind()
        rechargeYourMind.startRechargeTimer()
    }
    
    func resetRechargeTimer() {
        rechargeTimer?.invalidate()
        rechargeTimer = nil
    }
}